import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.url.split('/').pop();
  const decodedUrl = decodeURIComponent(url!);

  try {
    const apiResponse = await axios({
      url: decodedUrl,
      method: 'GET',
      responseType: 'arraybuffer'
    });

    const buffer = Buffer.from(apiResponse.data, 'binary');
    const contentType = apiResponse.headers['content-type'];

    const filename = decodedUrl.split('/').pop();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`
      }
    });
  } catch (error) {
    return NextResponse.error();
  }
}
