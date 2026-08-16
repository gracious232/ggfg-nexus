import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const { readAssessmentStore } = require('@/lib/assessment-data.js');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const certificateId = String(searchParams.get('certificateId') || '').trim();

    if (!certificateId) {
      return NextResponse.json({ valid: false, message: 'Certificate ID is required.' }, { status: 400 });
    }

    const store = readAssessmentStore();
    const certificate = store.certificates.find(
      (item: any) => String(item.certificateId || '').toUpperCase() === certificateId.toUpperCase(),
    );

    if (!certificate) {
      return NextResponse.json({ valid: false, message: 'Certificate not found.' }, { status: 404 });
    }

    return NextResponse.json({
      valid: true,
      certificate: {
        certificateId: certificate.certificateId,
        learnerName: certificate.learner?.name || 'Unknown learner',
        program: certificate.program,
        completionDate: certificate.completionDate,
        status: 'COMPLETED',
      },
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ valid: false, message: 'Unable to verify certificate.' }, { status: 500 });
  }
}
