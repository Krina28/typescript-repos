import React from 'react';
import posed from 'react-pose';

const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px #7FFFD4'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});

class Partners extends React.Component {
    render() {
        let companies = [{
            "name": "Instagram",
            "logo": ""
        }, {
            "name": "IDEO",
            "logo": ""
        }, {
            "name": "Pied Piper",
            "logo": ""
        }, {
            "name": "VidChat",
            "logo": ""
        }]
        return (
            <div className="partners-div">
                {companies && companies.map((company) => {
                    return (
                        <Box className="box">
                            <img alt="company" src={company.logo} />
                            <span>{company.name}</span>
                        </Box>
                    )
                })}
            </div>
        );
    }
}

export default Partners;
