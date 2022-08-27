import type { NextPage } from "next"

import ProfileCard from "../components/ProfileCard"
import profileContent from "../content/profile.json"

const Home: NextPage = () => {
	return (
		<div>
			<ProfileCard {...profileContent} />
		</div>
	)
}

export default Home
