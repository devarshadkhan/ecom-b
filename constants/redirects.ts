

const redirect404 = () => {
    return {
        redirect: {
            permanent: false,
            destination: "/404",
        },
    };
}

export default redirect404;