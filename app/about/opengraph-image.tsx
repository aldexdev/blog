export const runtime = "edge";
export const revalidate = 60;

import { ImageResponse } from "next/server";

export default async function AboutOG() {
  const aldexdevPhoto = fetch(
    new URL(`../../public/images/aldexdev_gray.jpg`, import.meta.url)
  ).then(res => res.arrayBuffer());

  // fonts
  const inter300 = fetch(
    new URL(
      `../../node_modules/@fontsource/inter/files/inter-latin-300-normal.woff`,
      import.meta.url
    )
  ).then(res => res.arrayBuffer());

  const inter500 = fetch(
    new URL(
      `../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff`,
      import.meta.url
    )
  ).then(res => res.arrayBuffer());

  const robotoMono400 = fetch(
    new URL(
      `../../node_modules/@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff`,
      import.meta.url
    )
  ).then(res => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="flex p-10 h-full w-full bg-white flex-col"
        style={font("Inter 300")}
      >
        <main tw="flex grow pt-4 w-full justify-center items-center">
          <div tw="flex flex-row">
            <div tw="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                tw="rounded-full h-74"
                alt="Alex Delgado"
                // @ts-ignore
                src={await aldexdevPhoto}
              />
            </div>

            <div tw="flex flex-col px-10 grow text-[28px] h-70 justify-center">
              <div tw="text-[64px] mb-7" style={font("Inter 500")}>
                Alex Delgado
              </div>
              <div tw="flex mb-5" style={font("Roboto Mono 400")}>
                <span tw="text-gray-400 mr-3">&mdash;</span> Software Developer
                and Project Manager
              </div>
              <div tw="flex" style={font("Roboto Mono 400")}>
                <span tw="text-gray-400 mr-3">&mdash;</span> Lives in Madrid,
                Spain
              </div>
            </div>
          </div>
        </main>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter 300",
          data: await inter300,
        },
        {
          name: "Inter 500",
          data: await inter500,
        },
        {
          name: "Roboto Mono 400",
          data: await robotoMono400,
        },
      ],
    }
  );
}

// lil helper for more succinct styles
function font(fontFamily: string) {
  return { fontFamily };
}
