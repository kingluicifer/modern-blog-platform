import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

/**
 * POST /api/upload - Upload files
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file size
    const maxSize = parseInt(process.env.MAX_FILE_SIZE || '5242880');
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds limit' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = (process.env.ALLOWED_UPLOAD_TYPES || 'image/jpeg,image/png').split(',');
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'File type not allowed' },
        { status: 400 }
      );
    }

    // TODO: Upload to cloud storage (e.g., AWS S3, Cloudinary)
    const fileUrl = `/uploads/${uuidv4()}-${file.name}`;

    return NextResponse.json(
      {
        success: true,
        message: 'File uploaded successfully',
        data: {
          url: fileUrl,
          filename: file.name,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
