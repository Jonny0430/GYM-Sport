import { Button } from "@/components/ui/button";
import { featuredItems, programs } from "@/constants";
import sss from "@/assets/sss.jpg";
import { Card } from "@/components/ui/card";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="w-full h-screen flex items-center">
                <div className="max-w-xl ml-60 flex h-full flex-col justify-center">
                    <h1 className="text-9xl font-semibold uppercase">Workout with me</h1>
                    <p className="text-mute-foreground">
                        Sport soliq - bu sizning soligiz uchun eng kereklik va yaxshi karsa 
                    </p>
                    <Button className="w-fit mt-6 font-bold h-12" size={'lg'}>
                        Join club now
                    </Button>
                    <div className="mt-24">
                        <p className="text-mute-foreground">AS FEATURE IN</p>
                        <div className="flex items-center gap-4 mt-2">
                            {featuredItems.map((Icon, index) => (
                                <Icon key={index} className="w-12 h-12" />
                            ))}
                        </div>
                    </div>
                </div>
                <img src={sss} className="h-20px mt-11 ml-12 w-27"/>
                </div>
                

                <div className="container max-w-5xl mx-auto">
                    <h1 className="text-4xl">Not sure where to start?</h1>
                    <p className="mt-2 text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                        </p>
                        <div className="grid grid-cols-3 gap-4 my-8">
                        {programs.map(item => (
                        <Card key={item.title} className="p-8 relative cursor-pointer grup-hover">
                            <h3>{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.descr}</p>
                            <Button size={'icon'} variant={'ghost'} className="absolute right-0 top-1/2 group-hover:translate-x-3 transition-transform">
                            <FaChevronRight />
                            </Button>
                        </Card>
                        ))}
                        </div>
                </div>
        </>
    )
}

export default Home;