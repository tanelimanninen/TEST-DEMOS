function get8BallResponse(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

module.exports = get8BallResponse;