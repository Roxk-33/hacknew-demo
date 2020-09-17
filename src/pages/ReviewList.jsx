import React from 'react';
import useSWR from 'swr';
import urlParse from 'query-string';
import styled from 'styled-components';
import ArticleDetail from '../components/ArticleDetail';
import UserReviewList from '../components/UserReviewList';
import UserReviewInput from '../components/UserReviewInput';
const fetcher = (url) => fetch(url).then((r) => r.json());

const Container = styled.div`
	padding: 5px 20px;
	max-width: 90%;
	margin: 20px auto;
	color: #828282;
	font-size: 10pt;
	text-align: left;
	background-color: rgb(246, 246, 239);
`;

function ReviewList() {
	const { id = 21565624 } = urlParse.parse(window.location.search);
	const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, fetcher);
	console.log(id);
	if (!id) return <div>无 ID 参数,请在url上附带参数id</div>;
	if (!data) return <div>loading...</div>;
	return (
		<Container className="ReviewList">
			<ArticleDetail title={data.title} link={data.url} />
			<UserReviewInput />
			<UserReviewList />
		</Container>
	);
}

export default ReviewList;
