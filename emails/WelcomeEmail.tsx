import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Font,
} from "@react-email/components";

export default function WelcomeEmail({ name }: { name?: string }) {
  return (
    <Html>
      <Head>
        {/* Declare web fonts (best effort; some clients ignore these) */}
        <Font
          fontFamily="Outfit"
          fallbackFontFamily="Arial"
          fontStyle="normal"
          fontWeight={400}
          webFont={{
            url: "https://fonts.gstatic.com/s/outfit/v15/QGYvz_MVcBeNP4NJuktqUYLkn8BJ.woff2",
            format: "woff2",
          }}
        />
        <Font
          fontFamily="Outfit"
          fallbackFontFamily="Arial"
          fontStyle="normal"
          fontWeight={700}
          webFont={{
            url: "https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NJtEtqU6V8no.woff2",
            format: "woff2",
          }}
        />
        <Font
          fontFamily="Chewy"
          fallbackFontFamily="Arial"
          fontStyle="normal"
          fontWeight={400}
          webFont={{
            url: "https://fonts.gstatic.com/s/chewy/v17/uK_w4ruVlbQvAnyVfg.woff2",
            format: "woff2",
          }}
        />
      </Head>

      <Preview>Welcome to the Worldside Family!</Preview>

      <Body
        style={{
          backgroundColor: "#c7dde1",
          fontFamily: '"Outfit", Arial, Helvetica, sans-serif',
          margin: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "32px",
          }}
        >
          <Section style={{ textAlign: "center" }}>
            <Text
              style={{
                fontFamily: '"Chewy", "Outfit", Arial, Helvetica, sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Welcome to Worldside
            </Text>

            <Text
              style={{
                color: "#374151",
                fontFamily: '"Outfit", Arial, Helvetica, sans-serif',
                fontSize: "16px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {name ? `Hi ${name},` : "Hi there,"} <br />
              Thanks for joining our travel community! You’ll be the first to hear
              when our Thailand Trip drops.
            </Text>

            <Link
              href="https://goworldside.com"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "6px",
                backgroundColor: "#c7dde1",
                color: "#111827", // better contrast on light bg
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: '"Chewy", "Outfit", Arial, Helvetica, sans-serif',
              }}
            >
              Explore Trips
            </Link>
          </Section>

          <Text
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              marginTop: "32px",
              textAlign: "center",
              fontFamily: '"Outfit", Arial, Helvetica, sans-serif',
            }}
          >
            © {new Date().getFullYear()} Worldside - No Ordinary Holidays.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
