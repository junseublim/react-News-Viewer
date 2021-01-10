import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom : 3rem;
    width: 768px;
    margin: 0 uato;
    margin-top: 3rem;
    @media screen and (max-width: 768px) {
        widht: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;


const NewsList = ({category}) => {

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=871ff07cc9f44a34ba4799a6c9d851d0`);
    }, [category]);


    if (loading) {
        return <NewsListBlock>대기 중....</NewsListBlock>
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {
                articles.map(article => (
                    <NewsItem article={article} key={article.url}/>
                ))
            }
        </NewsListBlock>
    )
}

export default NewsList;