import Link from "next/link"
import Image from "next/dist/client/image"
import grid1 from "../public/media/grid1.png"
import grid2 from "../public/media/grid2.png"
import grid3 from "../public/media/grid3.png"
import grid4 from "../public/media/grid4.png"

export default function GridContainer() {
  return (
    <div className="mainContainerGrid">
      <Link href="#">
        <a className="gridElement" id="grid1">
          <div className="gridPhoto">
            <Image src={grid1} alt="gridPhoto" layout="fill" objectFit="cover" />  
          </div>
          <div className="gridInfo">
            <div className="gridInfoInner">
              <p className="gridInfoTitle">Mirabad avenue</p>
              <p className="gridInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod.</p>
            </div>  
          </div>
          <button id="gridBtn" className="secondary-btn">Read more</button>  
        </a>
      </Link>  
      <Link href="#">
        <a className="gridElement" id="grid2">
          <div className="gridPhoto">
            <Image src={grid2} alt="gridPhoto" layout="fill" objectFit="cover" />  
          </div>
          <div className="gridInfo">
            <div className="gridInfoInner">
              <p className="gridInfoTitle">Mirabad avenue</p>
              <p className="gridInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod.</p>
            </div>  
          </div>
          <button id="gridBtn" className="secondary-btn">Read more</button>  
        </a>
      </Link>  
      <Link href="#">
        <a className="gridElement" id="grid3">
          <div className="gridPhoto">
            <Image src={grid3} alt="gridPhoto" layout="fill" objectFit="cover" />  
          </div>
          <div className="gridInfo">
            <div className="gridInfoInner">
              <p className="gridInfoTitle">Mirabad avenue</p>
              <p className="gridInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod.</p>
            </div>  
          </div>
          <button id="gridBtn" className="secondary-btn">Read more</button>  
        </a>
      </Link>  
      <Link href="#">
        <a className="gridElement" id="grid4">
          <div className="gridPhoto">
            <Image src={grid4} alt="gridPhoto" layout="fill" objectFit="cover" />  
          </div>
          <div className="gridInfo">
            <div className="gridInfoInner">
              <p className="gridInfoTitle">Mirabad avenue</p>
              <p className="gridInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod. adipisicing elit. Voluptas, quod.</p>
            </div>  
          </div>
          <button id="gridBtn" className="secondary-btn">Read more</button>  
        </a>
      </Link>  
    </div>
  )  
}