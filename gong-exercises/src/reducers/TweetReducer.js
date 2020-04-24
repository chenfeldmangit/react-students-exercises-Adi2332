import {ADD_TWEET, DELETE_TWEET, LIKE_TWEET} from "../actions/TweetActions";

let init = {
    tweetList: {
        1: {id: 1, like:false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."},
        2: {id: 2, like:false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."},
        3: {id: 3, like:false, text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium amet autem cumque error eum ex, excepturi exercitationem labore laudantium minus, molestiae neque nesciunt, nisi officia perferendis quidem voluptate. Accusamus aliquam aperiam consequatur delectus deserunt dolores, expedita fugiat hic illo illum incidunt ipsam magnam maiores minus molestias neque odio odit officia pariatur praesentium, quo reiciendis repellendus sunt tempora voluptate! Adipisci autem dicta et eum expedita id inventore ipsum laudantium molestiae, nemo neque nostrum possimus quae qui reiciendis rerum vero. Ab adipisci alias cupiditate eum laborum non nostrum rerum tenetur! Doloremque est eum labore voluptatem! Aperiam culpa deleniti dolores fuga fugit harum id inventore ipsam itaque labore laboriosam maiores, neque nihil non qui quidem reprehenderit soluta suscipit veniam voluptas! Accusantium. Ab ad, adipisci aliquid at atque consectetur, distinctio dolores ea est facere facilis fuga illum in ipsum iusto libero maiores minus natus nesciunt praesentium reiciendis repellat repellendus similique, vitae voluptatibus."},
    }
};

const TweetReducer = function (state = init, action) {
    switch (action.type) {
        case ADD_TWEET:
            return {...state, tweetList: {...state.tweetList, [action.tweet.id]:action.tweet}};

        case LIKE_TWEET:
            return {...state,
                tweetList: {...state.tweetList,
                    [action.tweet.id]:{...state.tweetList[action.tweet.id], like:!action.tweet.like}}};

        case DELETE_TWEET:
            const tweetList = JSON.parse(JSON.stringify(state.tweetList));
            delete tweetList[action.tweet.id];
            return {...state, tweetList: tweetList};

        default:
            return state;
    }
};

export default TweetReducer;