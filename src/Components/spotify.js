export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientID = "99f18b1455b348bd940f77c8c3bf271d";
const scopes = [
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-recently-played",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce(
        (initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {}
    );
}

export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`