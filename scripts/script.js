let profileId = "code.architects";
async function fetchLatestPosts(profileId) {
	const url = `https://www.instagram.com/${profileId}/?__a=1`;
	const response = await fetch(url);
	const data = await response.json();

	console.log(data);
	let followers = data.graphql.user.edge_followed_by.count;
	let following = data.graphql.user.edge_follow.count;
	let igpost = data.graphql.user.edge_owner_to_timeline_media.count;
	document.querySelector("#followers").innerHTML = followers;
	document.querySelector("#following").innerHTML = following;
	document.querySelector("#posts").innerHTML = igpost;

	const latest = data.graphql.user.edge_owner_to_timeline_media.edges;
	let thumbnails = [];
	let likes = [];


	latest.forEach(element => {
		thumbnails.push(
			{
				imgsrc: element.node.thumbnail_src,
				likes: element.node.edge_media_preview_like.count,
				comment: element.node.edge_media_to_comment.count
			}
		);
	});
	thumbnails.length = 6;
	console.log(thumbnails);
	return thumbnails;
}

async function createGallery(profileId) {
	const thumbnails = await fetchLatestPosts(profileId);
	let posts = document.querySelector(".posts");

	thumbnails.forEach(thumbnail => {
		const post = document.createElement("div");
		post.setAttribute("class", "post")
		const hoverel = document.createElement("div");
		hoverel.setAttribute("class", "posthover");
		const hoverlikes = document.createElement("span");
		hoverlikes.setAttribute("class", "postlikes");
		hoverlikes.innerHTML = thumbnail.likes + "&nbsp;<i class='fa fa-heart'></i>";
		const hovercomments = document.createElement("span");
		hovercomments.innerHTML = thumbnail.comment + "&nbsp;<i class='fa fa fa-commenting'></i>";
		hovercomments.setAttribute("class", "postcomments");
		hoverel.appendChild(hoverlikes);
		hoverel.appendChild(hovercomments);
		// hoverel.innerHTML = thumbnail.likes + "&nbsp;<i class='fa fa-heart'></i>";
		post.appendChild(hoverel);
		const img = document.createElement("img");

		post.appendChild(img);
		img.src = thumbnail.imgsrc;
		posts.appendChild(post);
	});
}
createGallery(profileId);