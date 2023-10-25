import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='rounded-full border-2 border-white mx-auto mt-8'
        src='/images/avatar_copy.JPG'
        width={150}
        height={150}
        alt='reddyandwish'
        priority={true}
        />
    </section>
  );
}
