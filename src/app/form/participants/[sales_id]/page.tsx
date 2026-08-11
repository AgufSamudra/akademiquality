import type { Metadata } from "next";

import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Pendaftaran Peserta",
  robots: { index: false, follow: false },
};

export default async function ParticipantRegistrationPage({
  params,
}: {
  params: Promise<{ sales_id: string }>;
}) {
  const { sales_id } = await params;
  return <RegistrationForm type="participant" salesId={sales_id} />;
}
