CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    status VARCHAR(100) DEFAULT 'user-created',
    vote_count INT DEFAULT 0
);

CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    feature_id INT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    vote_type VARCHAR(10) CHECK (vote_type IN ('upvote', 'downvote')),
    FOREIGN KEY (feature_id) REFERENCES features(id)
);
