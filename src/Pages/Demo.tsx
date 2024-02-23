import HTMLFlipBook from "react-pageflip"
import Layout from "./LayoutPages"
import NavBar from "../Components/NavBar"
import bgImage from "../assets/bgImage.png"

const Demo = () => {
  return (
    <Layout>
      <NavBar background={bgImage}>
    <HTMLFlipBook width={300} height={500} className={""} style={{}} startPage={0} size={"fixed"} minWidth={500} maxWidth={600} minHeight={220} maxHeight={320} drawShadow={false} flippingTime={2} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0} showCover={false} mobileScrollSupport={false} clickEventForward={false} useMouseEvents={false} swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
      </NavBar>
    </Layout>
  )
}

export default Demo