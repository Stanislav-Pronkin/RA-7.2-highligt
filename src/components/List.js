import React from "react";
import withWrapper from "./HOC";
import shortid from 'shortid';
import Video from "./Video";
import Article from "./Article";

const VideoWithWrapper = withWrapper(Video);
const ArticleWithWrapper = withWrapper(Article);

export default function List(props) {
	return props.list.map(item => {
		switch (item.type) {
			case 'video':
				return (
					<VideoWithWrapper {...item} key={shortid.generate()} />
				);

			case 'article':
				return (
					<ArticleWithWrapper {...item} key={shortid.generate()} />
				);

			default:
				return null;
		}
	});
};