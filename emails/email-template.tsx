interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
  userEmail: string;
}

export default function EmailTemplate({
  firstName,
  lastName,
  message,
  userEmail,
}: EmailTemplateProps) {
  return (
    <div>
      <p>
        Hello, my name is {lastName}, {firstName}
      </p>
      <p>{message}</p>
      <p>From: {userEmail}</p>
    </div>
  );
}
