const FeatureCard = ({ feature }) => {
    return (
        <div className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <p>Category: {feature.category}</p>
            <div>
                <button className="upvote">Upvote</button>
                <button className="downvote">Downvote</button>
            </div>
        </div>
    );
};

export default FeatureCard;
