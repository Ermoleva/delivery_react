import Slider from "../src/components/section/sliderMain"
import Component from "../src/components/section/tabs"
import Advantage from "../src/components/section/Advantage";
import Photos from "../src/components/section/photos";
import Form from "../src/components/section/Form";
export default function Home({title}) {
    return (
        <>
            <Slider/>
            <Advantage />
            <Component />
            <Photos />
            <Form />

        </>
    )
}

