import { contact } from "../constants";

const Contact = () => {

    return (
        <section id="contact" className="px-6 md:px-24 py-20 min-h-screen relative Z-50">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            ></div>
            <div className="flex flex-col md:flex-row justify-center items-center text-sm pb-4">
                <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="border font-bold px-4 py-1 rounded-full text-xs">
                        CONTACT ME
                    </div>
                </div>
            </div>

            <h2 className="text-[4rem] md:text-[16rem] font-serif text-center my-4">
                Contact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center relative Z-10">
                {contact.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.id}>
                            <div className="flex justify-center">
                                <Icon className="mb-3 text-[#8C39D9]" size={24} />
                            </div>
                            <h3 className="text-white font-semibold">{item.label}</h3>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-sm mt-1 block hover:text-white"
                            >
                                {item.value}
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
