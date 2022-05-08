import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase-admin/app";

const firebaseAdminConfig = {
    "type": "service_account",
    "project_id": "tasks-firebase-example",
    "private_key_id": "b6eede90080a56ed4deb25f7413e38c9877dca81",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClGG1TU49uekvY\neMnuOMw5uH+n7radTxmr1+OJkPOMaCL4jDVV5gp0wiMf8lV+I02K9Bo5aLP0nvAm\n3iEZC371Rnb7N9/mX6uuWJpcRZwBlMfwUFpSmKksxUASGsBuuUvpDJp2dv0uY149\nOd8Qnfaym/fysnrdIxfslnfJ4q69myeT9avAXA5HiQ3YrO2Xo+9kuty0mvwiW2Lq\nS9Xulkr+9O8jCELbb/C2Pt7KxWS7QvyasYMVdre2B2Vu7IyLvqCqqSEgQ4Ys4yVR\naP32x15YUknTTOqWUivlOFN3peT3jXZb4WWJI1b6GbhlK++ai7fzE8eQUn/kH9UP\nTwp8YGQbAgMBAAECggEAF9gjUg7rfvqizFewXSZO42Hw7gGIK8gqM6uGmBkbU9gR\nKkdLHLuQybQ6+841ksuT03yAnRyw1k/Dl5mAEOycIDNWfooKCG0g5UQJZ0eWdJQB\nxy+TxqzNzO2K3L0zCyAwBS9mJQiidc9cOQjhXWEIfwYPwDm5jQlt1yRplfrrX0Q3\nWoXmrdMDrqE/6iWFDRXmmw5wuUhXk/3CLzv8TQlxnGSUPv/0yYlJu3UK/0JP8Xd1\ngSsWDX8ZXZBGD+KWaQMur+N+iQEBLOhNsUA2L+1YcN8XjeB518RgOWeawVV+cXdE\n37J33p8K1rftaA60z1E3yHVF1SjccKvlZqHJTxrsQQKBgQDRFg/5cQ6r1ruhXryZ\nUjEBVYsmx/93pGNtd6lB9LBSVcOA1JzC6yt8B9vrsVgGsBHMbZlUJjli0Fy8TIXc\nmGWivtiRd6K3D35kdYxwMud+4Klr9bHIyx9tucA2qr4doKPI+tN04AmRCoDH/e1t\nWyERC0aLiMV3YTsWCtptDBPbSQKBgQDKI4eLMMjaqTaeQeWITz/7xdhgNriPTS1q\nQorl88G66P+mGs+A+uKtUENmz+9IO4fV5b++6XmDSk5IDYEFrewhbkMQD1fxLV1m\nDNqDcqQJfbsHtO2KOJWo2GykAV413B0JnbpA1OieOILLQqzC2eKLYZ/qW1IjQ3PR\nYFyr+74AQwKBgQC8KsLNljXB6EqL+5p30URREw9cI3mBzuu8RIiK1w8nyg9cDfvW\nX5aO1PPStZOm0SXzeF8ZIB1dFG+g9q0xzeUKBf8ZSzWg0czJ1BBDmUxFHyLaCg+p\nyUPLl/OoPxlByKQd574N3OI/KdikI55dYDnuANvID5rGyTZHrBTPNqNYIQKBgEIE\ncJRJDpA7i5cMNobaOy9jYlOqC4Th099MdEi935vH1RbO0s5xIe8ws5K0fpW8u5Rk\nQMd9QS5b6k0l++l68A/LDyQDntkp08Msl4Euw9xFr/vIX3wxFs/aP0EhIT+9783g\nMaBS6NYj5rOzxvCscIzNCYlk4eKaeQz8x8dzpI45AoGADqxPyZbVR+TcKoE4vKjX\n1Ol3dkGzPi2aEi0dkKU5dIM7O3ahVSQCAKxDG9JzMkNYRv/lc7rnY+GjqsnHLdFx\nLCvAJ/v+ovnFWk4xuduBJ8cgy5ozfWeMb1RW8CUGJx+MsPEIFLjFH+sOPQDJZP4Z\ndlvgrRvydQBE9AdH/GNkrsA=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-qv1qi@tasks-firebase-example.iam.gserviceaccount.com",
    "client_id": "112296259000526796527",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qv1qi%40tasks-firebase-example.iam.gserviceaccount.com"
};

initializeApp(firebaseAdminConfig);

const delUser = async (uid) => {
    getAuth().deleteUser(uid)
        .then(() => {
            console.log('Successfully deleted user');
        })
        .catch((error) => {
            console.log('Error deleting user:', error);
        });
};

const Admini = () => {
return(
    <div>
        <h1>Admin Dashboard</h1>
    </div>
)
}

export default Admini;