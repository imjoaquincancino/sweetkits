import { NextResponse } from 'next/server';
import QRCode from 'qrcode';
import connectDB from '../../../lib/mongodb';
import QRCodeModel from '../../../models/QRCode';
import { config } from '../../../lib/config';

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('recipeId');
    
    if (!recipeId) {
      return NextResponse.json({ error: 'Recipe ID is required' }, { status: 400 });
    }

    // Verificar si ya existe un QR code para esta receta
    let qrCodeData = await QRCodeModel.findOne({ recipeId: parseInt(recipeId) });
    
    if (qrCodeData) {
      return NextResponse.json({
        success: true,
        qrCode: qrCodeData.qrCode,
        url: qrCodeData.url,
        recipeId: qrCodeData.recipeId
      });
    }

    // Generar URL para la receta
    const recipeUrl = `${config.app.baseUrl}/recetas/${recipeId}`;

    // Generar código QR
    const qrCodeString = await QRCode.toDataURL(recipeUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#ea580c', // Color naranja de SweetKit
        light: '#ffffff'
      }
    });

    // Guardar en la base de datos
    qrCodeData = new QRCodeModel({
      recipeId: parseInt(recipeId),
      qrCode: qrCodeString,
      url: recipeUrl
    });

    await qrCodeData.save();

    return NextResponse.json({
      success: true,
      qrCode: qrCodeString,
      url: recipeUrl,
      recipeId: parseInt(recipeId)
    });

  } catch (error) {
    console.error('Error generating QR code:', error);
    return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    
    const { recipeId } = await request.json();
    
    if (!recipeId) {
      return NextResponse.json({ error: 'Recipe ID is required' }, { status: 400 });
    }

    // Generar URL para la receta
    const recipeUrl = `${config.app.baseUrl}/recetas/${recipeId}`;

    // Generar código QR
    const qrCodeString = await QRCode.toDataURL(recipeUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#ea580c', // Color naranja de SweetKit
        light: '#ffffff'
      }
    });

    // Buscar si ya existe o crear nuevo
    let qrCodeData = await QRCodeModel.findOneAndUpdate(
      { recipeId: parseInt(recipeId) },
      {
        recipeId: parseInt(recipeId),
        qrCode: qrCodeString,
        url: recipeUrl
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      success: true,
      qrCode: qrCodeString,
      url: recipeUrl,
      recipeId: parseInt(recipeId)
    });

  } catch (error) {
    console.error('Error generating QR code:', error);
    return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
  }
}
