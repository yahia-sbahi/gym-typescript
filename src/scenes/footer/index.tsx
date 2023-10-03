import Logo from '@/assets/Logo.png'


const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className=' mx-auto justify-between w-5/6 gap-16 md:flex '>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nobis odit animi, quidem debitis totam voluptate harum maiores,veritatis minus perferendis dolor vero esse rem id aperiam laudantium. Consectetur!
                </p>
                <p>&copy; Evogym All Right Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Et gravida id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Yahia Sbahi</p>
                <p className='my-5'>Mobile: 0215729716</p>
                <p>Phone: 0937702555</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer