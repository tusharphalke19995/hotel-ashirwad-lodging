import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
            <ul className="navigation clearfix">
                <li> <Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about-us">About</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        
                        <li><Link href="/food-menu">Menu</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/amenities">Amenities</Link></li>
                        
                        <li className="dropdown"><Link href="#">Events</Link>
                            <ul>
                                <li><Link href="/events">Events </Link></li>
                                <li><Link href="/event-details">Events Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Packages</Link>
                            <ul>
                                <li><Link href="/packages">Packages</Link></li>
                                <li><Link href="/package-details">Package Details</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* <li className="dropdown"><Link href="#">Rooms</Link>
                    <ul>
                        <li><Link href="/room">Room Style 01</Link></li>
                        <li><Link href="/room-2">Room Style 02</Link></li>
                        <li><Link href="/room-details">Room Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/room">Rooms</Link>
                </li> 
                <li><Link href="/gallery">Gallery</Link>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
