import './Experience.css';

import Shadowdiv from '../Shadowdiv/Shadowdiv';

const Experience = ()=>{
const companies=[
    {name:'Infosys',title:'ETL Developer Full Time',start:'NOV 2020',end:'Present',address:'Hyderabad, Telangana.',desc:"I was responsible for complete ETL process over azure Cloud."},
    {name:'ISRO',title:'Full Stack Intern',start:'DEC 2019',end:'MAR 2020',address:'Ahmedabad, Gujarat.',desc:"I had contributed to the on going project Geo processing Work bench which is similar to Google earth engine build for ISRO scientists."},
    {name:'EPAM',title:'Tranie',start:'OCT 2018',end:'FEB 2019',address:'Vijayawada, Andhra Pradesh',desc:'Moto of this training is to bridge the gap between studends and the industry.'}
]
    return (
        <div className="Edu-container">

        
        <Shadowdiv color='rgb(10, 147, 146)' className='Edu-header'>
            <h1>Experience</h1>
        </Shadowdiv>
        <Shadowdiv color='whitesmoke' className='Edu-content'>
            {
                companies.map((company,index)=>{

                        return(
                            <div key={index} className="company-details-container">
                                <h1>
                                   {} {company.name}{'  '}|{'  '}{company.title}
                                </h1>
                                <h3>{company.start}{' ~ '}{company.end}</h3>
                                <p>{company.desc}</p>
                                <p>{company.address}</p>
                            </div>
                        )
                })
            }
        </Shadowdiv>
        </div>
    );
}

export default Experience;