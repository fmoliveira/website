import type { AppProps } from "next/app"

import "../styles/globals.css"
import PageHead from "../components/PageHead"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<PageHead />
			<Component {...pageProps} />
		</>
	)
}
