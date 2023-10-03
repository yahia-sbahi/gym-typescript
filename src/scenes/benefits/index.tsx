import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid"

import { SelectedPage ,BenefitType} from "@/shared/types"
import {motion} from "framer-motion"
import HText from "@/shared/HText"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits:Array<BenefitType> = [
    

    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:"numquam nihil debitis deserunt reiciendis obcaecati eaque, consequuntur repellendus sunt!"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:"numquam nihil debitis deserunt reiciendis obcaecati eaque, consequuntur repellendus sunt!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:"numquam nihil debitis deserunt reiciendis obcaecati eaque, consequuntur repellendus sunt!"
    }

]

const contianer = {
    hidden:{},
    visible:{
        transition: {staggerChildren: 0.2}
    }

}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true , amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden:{opacity:0 ,x:-50},
                    visible:{opacity:1 ,x:0}
                }}
                className="md:my-5 md:w-3/5"
            >
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo dolores cum sint natus omnis similique molestiae reiciendis, exercitationem provident suscipit repellat eos, rerum debitis! Ex culpa dolore magni doloremque?
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={contianer}
                className="md:flex items-center justify-between gap-8 mt-5"
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    
                    />
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic" 
                    src={BenefitsPageGraphic}
                     />

                {/* DESCRITION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true , amount: 0.5}}
                                transition={{duration: 0.5}}
                                variants={{
                                    hidden:{opacity:0 ,x:50},
                                     visible:{opacity:1 ,x:0}
                                }}
                            > 
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true , amount: 0.5}}
                        transition={{ delay:0.2, duration: 0.5}}
                        variants={{
                            hidden:{opacity:0 ,x:50},
                            visible:{opacity:1 ,x:0}
                        }} 
                    >
                        <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eveniet culpa sapiente nobis sequi voluptates, quas voluptatem dolores similique voluptatum pariatur! Dolore commodi libero amet facilis, reprehenderit id odit dolorem?</p>
                        <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto neque ex quod pariatur sequi dolorum natus! Sint nulla dignissimos illo ad inventore asperiores, amet corporis molestiae architecto dolores, dolorum culpa.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute befroe:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits