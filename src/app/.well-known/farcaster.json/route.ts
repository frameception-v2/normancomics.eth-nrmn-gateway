import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "normancomicseth-nrmn-gateway.vercel.app",
        timestamp: 1738716545,
        expirationTime: 1746492545
      },
      signature: "f5f5a7c913c1b4dfc2807a5ae28c6d8a1b9ea9e8e6c8c05d16fe46bf96ce45994e4cadcf34011224e9ec2346c06ffdc28d45dc8dbd807eb54b8bff570c801d371c",
      signingKey: "088d06f7651ecde2f0b37d15020e3edeee0bd8ed12984f9a058af5a0579ddb90"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
