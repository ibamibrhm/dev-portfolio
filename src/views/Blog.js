import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import ContentContainer from '../styles/ContentContainer.styled';

const BlogContainer = styled(ContentContainer)`
  .card-img-top {
    object-fit: cover;
  }

  .card-footer {
    padding: 12px;
  }

  .card-title {
    font-size: 16px;
    margin: 0;
    color: ${({ theme }) => theme.text};

    &:hover {
      color: ${({ theme }) => theme.secondaryText};
      text-decoration: none;
    }
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ibamibrhm');
      const resjson = await res.json();
      const data = resjson.items.filter((item) => item.categories.length > 0);
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h5 className="py-3">Loading...</h5>;
  }

  return (
    <BlogContainer className="p-3">
      <Row>
        {posts.map((post) => (
          <Col key={post.guid} md={4} className="mb-3">
            <Card
              className="h-100"
              itemScope
              itemType="https://schema.org/Blog"
            >
              <Card.Img
                variant="top"
                src={post.thumbnail}
                alt={post.title}
                width="100%"
                height="150"
                loading="lazy"
              />
              <Card.Body itemProp="blogPost">
                <Card.Title
                  as="a"
                  href={post.guid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.title}
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {post.categories.map((category, idx) => (
                    <span key={idx} className="mr-1" itemProp="keywords">
                      {'#' + category}
                    </span>
                  ))}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </BlogContainer>
  );
};

export default React.memo(Blog);
