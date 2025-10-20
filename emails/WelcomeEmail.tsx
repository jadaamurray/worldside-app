import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
  Hr,
  Link,
} from "@react-email/components";

export default function WelcomeEmail({ name }: { name?: string }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Worldside 🌍 Your next adventure awaits</Preview>
      <Body
        style={{
          backgroundColor: "#f7fafc",
          margin: 0,
          fontFamily: '"Outfit", Arial, sans-serif',
          color: "#111827",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* HEADER IMAGE */}
          <Img
            src="https://images.unsplash.com/photo-1596879857570-7b6b9018bcb6?q=80&w=1200&auto=format&fit=crop"
            alt="Tropical coastline"
            width="600"
            height="260"
            style={{ objectFit: "cover", display: "block" }}
          />

          {/* WELCOME SECTION */}
          <Section style={{ padding: "40px 32px 20px 32px", textAlign: "center" }}>
            <Text
              style={{
                fontFamily: '"Abril Fatface", Georgia, serif',
                fontSize: "32px",
                lineHeight: "1.2",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Welcome to <span style={{ color: "#0ea5e9" }}>Worldside</span>
            </Text>
            <Text
              style={{
                fontSize: "16px",
                color: "#374151",
                marginTop: "16px",
                lineHeight: "1.6",
              }}
            >
              {name ? `Hi ${name},` : "Hi there,"} <br />
              We’re so glad you joined our travel community. Your first adventure
              starts here — curated trips, beautiful stays, and friends you haven’t met yet.
            </Text>

            <Link
              href="https://goworldside.com"
              style={{
                display: "inline-block",
                marginTop: "28px",
                padding: "12px 24px",
                borderRadius: "6px",
                background:
                  "linear-gradient(135deg, #0ea5e9 0%, #3730a3 100%)",
                color: "#ffffff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Explore Trips
            </Link>
          </Section>

          {/* FEATURE IMAGE GRID */}
          <Section
            style={{
              padding: "24px 0",
              backgroundColor: "#f1f5f9",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Img
              src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=400&auto=format&fit=crop"
              alt="Beach resort"
              width="185"
              height="130"
              style={{ borderRadius: "6px", objectFit: "cover" }}
            />
            <Img
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=400&auto=format&fit=crop"
              alt="Island landscape"
              width="185"
              height="130"
              style={{ borderRadius: "6px", objectFit: "cover" }}
            />
            <Img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=400&auto=format&fit=crop"
              alt="Villa interior"
              width="185"
              height="130"
              style={{ borderRadius: "6px", objectFit: "cover" }}
            />
          </Section>

          {/* FOOTER */}
          <Section style={{ padding: "32px", textAlign: "center" }}>
            <Hr style={{ border: "none", borderTop: "1px solid #e5e7eb", marginBottom: "16px" }} />
            <Text
              style={{
                fontSize: "14px",
                color: "#64748b",
                lineHeight: "1.5",
              }}
            >
              You’re receiving this email because you joined the Worldside waitlist.  
              We’ll only send good stuff — no spam.
            </Text>
            <Link
              href="https://goworldside.com/unsubscribe"
              style={{
                color: "#0ea5e9",
                fontSize: "13px",
                textDecoration: "underline",
              }}
            >
              Unsubscribe
            </Link>
            <Text
              style={{
                marginTop: "24px",
                fontSize: "12px",
                color: "#94a3b8",
              }}
            >
              © {new Date().getFullYear()} Worldside · news@goworldside.com
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
