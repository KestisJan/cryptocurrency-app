import React from "react";
import moment from 'moment';
import { Select, Typography, Row, Col, Card } from 'antd';

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;

const News = (simplified) => {
    const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery();

    if (isLoading) return 'Loading...'
    const newsToShow = simplified ? cryptoNews.data.slice(0, 12) : cryptoNews.data;


    return (
        <Row gutter={[ 24, 24]}>
            {newsToShow.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.title}</Title>
                                <img src={news?.thumbnail} style={{ maxWidth: '200px', maxHeight: '100px', objectFit: 'cover' }}></img>
                            </div>
                            <p>
                                {news.description.length > 100
                                    ? `${news.description.substring(0, 100)}...`
                                    : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News