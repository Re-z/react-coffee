import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {BaristaPageCard} from "../BaristaPageCard";
import Box from "@material-ui/core/Box";

const products = [
    {
        id: 0,
        img: 'https://static.turbosquid.com/Preview/2019/07/15__05_52_12/Espresso_Coffee_thumbnail_0000.jpgDE3EEDC7-9006-44A8-9EB9-3E3C047FA115Default.jpg',
        name: 'Espresso',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
        ]
    },
    {
        id: 1,
        img: 'https://www.magiccityweekend.com/wp-content/uploads/2020/08/Late-for-real.jpg',
        name: 'Late',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 2,
        img: 'data:image/jpeg;base64,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',
        name: 'Americano',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
        ]
    },
    {
        id: 3,
        img: 'https://www.gourmetcoffee-eg.com/image/cache/catalog/Doppio%20espresso%20double%20shot-1000x1000.jpeg',
        name: 'Dopio',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
        ]
    },
    {
        id: 4,
        img: 'https://d36bl1cjgcfngd.cloudfront.net/wp-content/uploads/sites/2/2018/06/18115512/espresso-sml.jpg',
        name: 'Ristretto',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
        ]
    },
    {
        id: 5,
        img: 'https://www.thespruceeats.com/thmb/UA_NNtGiS5n6CI07kJVOMkSqYEA=/2942x2942/smart/filters:no_upscale()/how-to-make-cappuccinos-766116-hero-01-a754d567739b4ee0b209305138ecb996.jpg',
        name: 'Capuchino',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNqhh1t0xhMef9tiOwUIB2lsyV8s5W2WBpg&usqp=CAU',
        name: 'Hot Chocolate',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "s",
                    price: 1,
                    ingridients: {}
                },
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 7,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tea-cup-bag-high-res-stock-photography-1570544677.jpg',
        name: 'Tea',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 8,
        img: 'https://images.indianexpress.com/2017/12/green-tea-file-photo-1200.jpg',
        name: 'Natural tea',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [
                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 9,
        img: 'data:image/jpeg;base64,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',
        name: 'Cacao',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [

                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 10,
        img: 'https://www.thespruceeats.com/thmb/DyoF3MpEKHdOZ4HI2XZuryUFChg=/1340x1005/smart/filters:no_upscale()/lynchburg-lemonade-recipe-761465-5999-5b1055cf3418c6003731db0c.jpg',
        name: 'Lemonade',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [

                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },
    {
        id: 11,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvi8xowUUwB89iaK8Lg5rr020hNFzBuCrL6w&usqp=CAU',
        name: 'Milk shake',
        text: 'Lorem ipsum dolorem blablbalba',
        sizes: [

                {
                    size: "m",
                    price: 2,
                    ingridients: {}
                },
                {
                    size: "l",
                    price: 3,
                    ingridients: {}
                },
                {
                    size: "xl",
                    price: 4,
                    ingridients: {}
                }
        ]
    },



]

export const BaristaPage = () => {

    return (
        <>
            <Typography paragraph variant="h4">Barista page</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => {
                        return (
                            <BaristaPageCard
                                key={product.id}
                                product={product}
                            />
                        )
                    })
                }
            </Grid>
        </>
    )
}