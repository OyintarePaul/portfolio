import { Html, Text } from "@react-email/components";

interface ContactProps {
  firstName: string;
  lastName: string;
  message: string;
  userEmail: string;
}

export function Contact({
  firstName,
  lastName,
  message,
  userEmail,
}: ContactProps) {
  return (
    <Html>
      <Text>{message}</Text>
      <Text>
        {firstName} {lastName}
      </Text>
      <Text>{userEmail}</Text>
    </Html>
  );
}

export default Contact;
