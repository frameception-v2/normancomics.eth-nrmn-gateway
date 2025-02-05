import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-blue-800">
        <div tw="flex flex-col text-center items-center">
          <h1 tw="text-6xl font-bold text-white mb-4">{PROJECT_TITLE}</h1>
          <p tw="text-3xl text-purple-100">{PROJECT_DESCRIPTION}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
