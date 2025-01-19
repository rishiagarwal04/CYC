import React from "react";

const colleges = {
    tier1: [{ name: "Indian Institute of Technology (IIT) Madras", website: "https://www.iitm.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Delhi", website: "https://home.iitd.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Bombay", website: "https://www.iitb.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Kanpur", website: "https://www.iitk.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Kharagpur", website: "http://www.iitkgp.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Roorkee", website: "https://www.iitr.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Guwahati", website: "https://www.iitg.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Hyderabad", website: "https://iith.ac.in/", fees: "₹2,00,000" },
    { name: "National Institute of Technology (NIT) Tiruchirappalli", website: "https://www.nitt.edu/", fees: "₹1,50,000" },
    { name: "Birla Institute of Technology and Science (BITS) Pilani", website: "https://www.bits-pilani.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Indore", website: "https://www.iiti.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Bhubaneswar", website: "https://www.iitbbs.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Gandhinagar", website: "https://www.iitgn.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Ropar", website: "https://www.iitrpr.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Patna", website: "https://www.iitp.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Mandi", website: "https://www.iitmandi.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Jodhpur", website: "https://www.iitj.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Varanasi (BHU)", website: "https://www.iitbhu.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Dhanbad (ISM)", website: "https://www.iitism.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Palakkad", website: "https://iitpkd.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Tirupati", website: "https://iittp.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Jammu", website: "https://iitjammu.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Bhilai", website: "https://www.iitbhilai.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Goa", website: "https://www.iitgoa.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Dharwad", website: "https://www.iitdh.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Nagpur", website: "https://www.iitgn.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Raipur", website: "https://www.iitraipur.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Surat", website: "https://www.iitsurat.ac.in/", fees: "₹2,00,000" },
    { name: "Indian Institute of Technology (IIT) Bhopal", website: "https://www.iitbhopal.ac.in/", fees: "₹2,00,000" }
    ],
    tier2: [
        { name: "Vellore Institute of Technology (VIT), Vellore", website: "https://vit.ac.in", fees: "₹1,98,000" },
        { name: "Amrita School of Engineering", website: "https://amrita.edu", fees: "₹1,75,000" },
        { name: "Thapar Institute of Engineering & Technology", website: "https://thapar.edu", fees: "₹1,50,000" },
        { name: "Manipal Institute of Technology (MIT)", website: "https://manipal.edu", fees: "₹3,35,000" },
        { name: "SRM Institute of Science and Technology", website: "https://srmist.edu.in", fees: "₹2,50,000" },
        { name: "PES University, Bangalore", website: "https://pes.edu", fees: "₹3,20,000" },
        { name: "R.V. College of Engineering, Bangalore", website: "https://rvce.edu.in", fees: "₹2,00,000" },
        { name: "BMS College of Engineering, Bangalore", website: "https://bmsce.ac.in", fees: "₹2,00,000" },
        { name: "Delhi Technological University (DTU), Delhi", website: "https://dtu.ac.in", fees: "₹1,90,000" },
        { name: "Netaji Subhas University of Technology (NSUT), Delhi", website: "https://nsut.ac.in", fees: "₹1,90,000" },
        { name: "Indian Institute of Information Technology (IIIT), Allahabad", website: "https://iiita.ac.in", fees: "₹1,60,000" },
        { name: "Indian Institute of Information Technology (IIIT), Hyderabad", website: "https://iiit.ac.in", fees: "₹3,00,000" },
        { name: "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar", website: "https://kiit.ac.in", fees: "₹3,50,000" },
        { name: "Shiv Nadar University, Uttar Pradesh", website: "https://snu.edu.in", fees: "₹2,50,000" },
        { name: "Symbiosis Institute of Technology, Pune", website: "https://sitpune.edu.in", fees: "₹2,50,000" },
        { name: "Lovely Professional University (LPU), Punjab", website: "https://lpu.in", fees: "₹1,80,000" },
        { name: "Jaypee Institute of Information Technology (JIIT), Noida", website: "https://jiit.ac.in", fees: "₹1,50,000" },
        { name: "Christ University Faculty of Engineering, Bangalore", website: "https://christuniversity.in", fees: "₹1,75,000" },
        { name: "SASTRA Deemed University, Thanjavur", website: "https://sastra.edu", fees: "₹1,65,000" },
        { name: "Chandigarh University, Chandigarh", website: "https://cuchd.in", fees: "₹1,70,000" },
        { name: "Dayananda Sagar College of Engineering, Bangalore", website: "https://dayanandasagar.edu", fees: "₹2,00,000" },
        { name: "Chitkara University, Punjab", website: "https://chitkara.edu.in", fees: "₹1,70,000" },
        { name: "Maharaja Agrasen Institute of Technology (MAIT), Delhi", website: "https://mait.ac.in", fees: "₹1,50,000" },
        { name: "Hindustan Institute of Technology & Science, Chennai", website: "https://hindustanuniv.ac.in", fees: "₹2,00,000" },
        { name: "Galgotias University, Uttar Pradesh", website: "https://galgotiasuniversity.edu.in", fees: "₹1,70,000" },
        { name: "SRM University, Andhra Pradesh", website: "https://srmap.edu.in", fees: "₹2,50,000" },
        { name: "GITAM (Deemed to be University), Visakhapatnam", website: "https://gitam.edu", fees: "₹2,25,000" },
        { name: "Bharati Vidyapeeth College of Engineering, Pune", website: "https://bvucoepune.edu.in", fees: "₹1,90,000" },
        { name: "Vel Tech Rangarajan Dr. Sagunthala University, Chennai", website: "https://veltech.edu.in", fees: "₹2,10,000" },
        { name: "Acharya Institute of Technology, Bangalore", website: "https://acharya.ac.in", fees: "₹1,80,000" },
        { name: "MS Ramaiah Institute of Technology, Bangalore", website: "https://msrit.edu", fees: "₹2,10,000" }
      ],
      
    tier3: [
        { name: "Anna University, Chennai", website: "https://annauniv.edu", fees: "₹50,000" },
        { name: "Jadavpur University, Kolkata", website: "https://jaduniv.edu.in", fees: "₹10,000" },
        { name: "College of Engineering, Pune (COEP)", website: "https://coep.org.in", fees: "₹1,00,000" },
        { name: "Punjab Engineering College (PEC), Chandigarh", website: "https://pec.ac.in", fees: "₹1,25,000" },
        { name: "Institute of Engineering and Technology, Lucknow (IET Lucknow)", website: "https://ietlucknow.ac.in", fees: "₹90,000" },
        { name: "Jamia Millia Islamia (JMI), Delhi", website: "https://jmi.ac.in", fees: "₹16,150" },
        { name: "National Institute of Technology (NIT) Surathkal", website: "https://nitk.ac.in", fees: "₹1,51,000" },
        { name: "National Institute of Technology (NIT) Warangal", website: "https://nitw.ac.in", fees: "₹1,50,000" },
        { name: "National Institute of Technology (NIT) Calicut", website: "https://nitc.ac.in", fees: "₹1,50,000" },
        { name: "Bharath Institute of Higher Education and Research, Chennai", website: "https://bharathuniv.ac.in", fees: "₹1,50,000" },
        { name: "Sathyabama Institute of Science and Technology, Chennai", website: "https://sathyabama.ac.in", fees: "₹1,80,000" },
        { name: "Dr. B.R. Ambedkar National Institute of Technology (NIT), Jalandhar", website: "https://nitj.ac.in", fees: "₹1,50,000" },
        { name: "KLE Technological University, Hubli", website: "https://kletech.ac.in", fees: "₹1,80,000" },
        { name: "Karunya Institute of Technology and Sciences, Coimbatore", website: "https://karunya.edu", fees: "₹2,00,000" },
        { name: "Reva University, Bangalore", website: "https://reva.edu.in", fees: "₹2,25,000" },
        { name: "Aditya Engineering College, Andhra Pradesh", website: "https://aec.edu.in", fees: "₹1,20,000" },
        { name: "Bharati Vidyapeeth University College of Engineering, Pune", website: "https://bvcoe.bharatividyapeeth.edu", fees: "₹1,70,000" },
        { name: "CMR Institute of Technology, Bangalore", website: "https://cmrit.ac.in", fees: "₹2,00,000" },
        { name: "Velalar College of Engineering and Technology, Erode", website: "https://velalarengg.ac.in", fees: "₹1,00,000" },
        { name: "KL University (Koneru Lakshmaiah Education Foundation), Vijayawada", website: "https://kluniversity.in", fees: "₹2,50,000" },
        { name: "GMR Institute of Technology, Rajam", website: "https://gmit.ac.in", fees: "₹1,30,000" },
        { name: "MVGR College of Engineering, Vizianagaram", website: "https://mvgrce.edu.in", fees: "₹1,25,000" },
        { name: "Vidya Jyothi Institute of Technology, Hyderabad", website: "https://vjit.ac.in", fees: "₹1,20,000" },
        { name: "K.S. Institute of Technology, Bangalore", website: "https://ksit.ac.in", fees: "₹1,70,000" },
        { name: "Narula Institute of Technology, Kolkata", website: "https://nit.ac.in", fees: "₹1,10,000" },
        { name: "GITAM School of Technology, Hyderabad", website: "https://gitam.edu", fees: "₹2,25,000" },
        { name: "Bannari Amman Institute of Technology, Erode", website: "https://bitsathy.ac.in", fees: "₹1,30,000" },
        { name: "Nitte Meenakshi Institute of Technology, Bangalore", website: "https://nmit.ac.in", fees: "₹1,60,000" },
        { name: "Atria Institute of Technology, Bangalore", website: "https://atria.edu", fees: "₹1,75,000" }
      ]      
      
};

const Table = ({ data, tier }) => (
    <div className="my-9">
        <h2 className="text-xl font-bold mb-4 text-purple-800">{tier}</h2>
        <table className="w-full border-collapse ">
            <thead className="bg-purple-800 text-white">
                <tr>
                    <th className="py-2 px-4 border border-purple-800 text-left">College Name</th>
                    <th className="py-2 px-4 border border-purple-800 text-left">Website</th>
                    <th className="py-2 px-4 border border-purple-800 text-left">Approximate Tuition Fees</th>
                </tr>
            </thead>
            <tbody className="bg-purple-100 text-black">
                {data.map((college, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border border-purple-800">{college.name}</td>
                        <td className="py-2 px-4 border border-purple-800">
                            <a href={college.website} target="_blank" className="text-purple-800 underline">
                                {college.website}
                            </a>
                        </td>
                        <td className="py-2 px-4 border border-purple-800">{college.fees}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const CollegeTable = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-8 text-purple-800">College Tuition Fees</h1>
            <Table data={colleges.tier1} tier="Tier 1 Colleges" />
            <Table data={colleges.tier2} tier="Tier 2 Colleges" />
            <Table data={colleges.tier3} tier="Tier 3 Colleges" />
        </div>
    );
};

export default CollegeTable;
