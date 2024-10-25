import React from 'react';
import aboutimg from '../../../images/Picture4.jpg';
import styled from 'styled-components';
const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`;
const Topsection = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    background-image: url(${aboutimg});
    background-blend-mode: overlay;
    background-color: rgba(255, 255, 255, .6);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  
`;
const About = () => {
    return (
        <AboutContainer>
            <Topsection>
                <h1>About</h1>
               

                <h3>Revolutionizing Healthcare with AI</h3>
                <p>
                    Human health is a complex interplay of factors including lifestyle, genetics, and environment. 
                    Machine Learning (ML) is at the forefront of a healthcare revolution, offering personalized 
                    and precise solutions for diagnostics, treatment, and disease prevention.
                </p>

                <h3>Key Applications of ML in Healthcare</h3>
                <ul>
                    <li><strong>Early Disease Detection:</strong> ML algorithms analyze medical images to spot abnormalities early.</li>
                    <li><strong>Predictive Analytics:</strong> Assess individual risk for conditions like Type 2 diabetes.</li>
                    <li><strong>Personalized Medicine:</strong> Tailor treatment plans based on patient's unique biology.</li>
                    <li><strong>Remote Monitoring:</strong> Analyze data from wearables to detect health anomalies.</li>
                </ul>

                <h3>Empowering Patients with ML</h3>
                <p>
                    ML enhances patient education through:
                </p>
                <ul>
                    <li>Symptom checkers and virtual health assistants</li>
                    <li>Personalized health insights via patient portals</li>
                    <li>Decision support tools for treatment options</li>
                </ul>

                <h3>Real-World Applications</h3>
                <p>
                    ML is making significant strides in:
                </p>
                <ul>
                    <li>Diabetes management with predictive glucose monitoring</li>
                    <li>Cardiovascular disease prevention through real-time monitoring</li>
                    <li>Personalized cancer treatment in oncology</li>
                </ul>

                <h3>Ethical Considerations</h3>
                <p>
                    As we embrace ML in healthcare, we must address:
                </p>
                <ul>
                    <li>Data privacy and security</li>
                    <li>Informed consent</li>
                    <li>Algorithmic bias</li>
                </ul>

                <h3>The Future of Healthcare</h3>
                <p>
                    ML is paving the way for more accessible, accurate, and personalized healthcare. 
                    By empowering patients and supporting clinicians, it has the potential to significantly 
                    improve health outcomes and reduce costs.
                </p>
            </Topsection>
        </AboutContainer>
    );
};

export default About;