import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function SolarPanelTable() {
  const { id } = useParams(); // Fetching the ID from the route parameter
  const navigate = useNavigate();
    const [solarPanelData, setSolarPanelData] = useState({
      "_id": "655acb971aac6ef4296f11d3",
      "General_Information": {
          "id": "655acb451aac6ef4296f11d2",
          "Model": "Alvin",
          "Manufacturing_Date": "11/11/2001",
          "Type": "Chipmunk"
      },
      "Compliance_Labelling_Certifications": {
          "Compliance_Standards": ["IEC 61215", "IEC 61730"],
          "Labelling": {
              "Specifications": {
                  "Power_Output": "320 W",
                  "Efficiency": "18%",
                  "Dimensions": "1000x1600x35 mm"
              },
              "Energy_Efficiency_Class": "Class A+",
              "Other_Information": "Recyclable materials used"
          },
          "Certifications": ["ISO 9001", "ISO 14001", "CE", "TUV"]
      },
      "Carbon_Footprint": {
          "Cradle_to_Grave_Carbon_Footprint": "235 kg CO2e",
          "Calculation_Methodology": "ISO 14040/44 standard"
      },
      "Supply_Chain_Due_Diligence": {
          "Social_Environmental_Due_Diligence": true,
          "Supply_Chain_Transparency": {
              "Origin_of_Materials": "Silicon from XYZ supplier",
              "Production_Processes": "Manufactured in ABC facility"
          }
      },
      "Materials_Composition": {
          "PV_Panel_Chemistry": "Monocrystalline Silicon",
          "Critical_Raw_Materials": ["Silicon", "Silver", "Copper"],
          "Hazardous_Substances": {
              "Presence": true,
              "Substances_List": ["Lead", "Cadmium"]
          }
      },
      "Circularity_Resource_Efficiency": {
          "End_of_Life_Management": {
              "Disposal_Guidelines": "Follow local recycling regulations",
              "Recycling_Potential": "80% of materials recyclable"
          }
      },
      "Performance_Durability": {
          "Performance_Metrics": {
              "Maximum_Power_Output": "320 W",
              "Temperature_Coefficient": "-0.3%/°C"
          },
          "Durability": {
              "Expected_Lifespan": "25 years",
              "Warranty": "Limited 25-year warranty"
          }
      }
  });
  // const [solarPanelData, setSolarPanelData] = useState({});

  // useEffect(() => {
  //   if (id) {
  //     // Fetch data based on the ID from the API
  //     // Replace this with your API fetch logic
  //     fetch(`http://localhost:5050/record/${id}`)
  //       .then(response => response.json())
  //       .then(data => setSolarPanelData(data))
  //       .catch(error => console.error('Error fetching data:', error));
  //   }
  // }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="text-center mb-4">Solar Panel Records</h1>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Model</th>
                <th>Manufacturing Date</th>
                <th>Type</th>
                <th>Compliance Standards</th>
                <th>Power Output</th>
                <th>Efficiency</th>
                <th>Dimensions</th>
                <th>Energy Efficiency Class</th>
                <th>Other Information</th>
                <th>Certifications</th>
                <th>Cradle to Grave Carbon Footprint</th>
                <th>Calculation Methodology</th>
                <th>Social Environmental Due Diligence</th>
                <th>Origin of Materials</th>
                <th>Production Processes</th>
                <th>PV Panel Chemistry</th>
                <th>Critical Raw Materials</th>
                <th>Hazardous Substances Presence</th>
                <th>Substances List</th>
                <th>Disposal Guidelines</th>
                <th>Recycling Potential</th>
                <th>Maximum Power Output</th>
                <th>Temperature Coefficient</th>
                <th>Expected Lifespan</th>
                <th>Warranty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{solarPanelData.General_Information.id}</td>
                <td>{solarPanelData.General_Information.Model}</td>
                <td>{solarPanelData.General_Information.Manufacturing_Date}</td>
                <td>{solarPanelData.General_Information.Type}</td>
                <td>
                  {solarPanelData.Compliance_Labelling_Certifications.Compliance_Standards.join(
                    ", "
                  )}
                </td>
                <td>
                  {
                    solarPanelData.Compliance_Labelling_Certifications.Labelling
                      .Specifications.Power_Output
                  }
                </td>
                <td>
                  {
                    solarPanelData.Compliance_Labelling_Certifications.Labelling
                      .Specifications.Efficiency
                  }
                </td>
                <td>
                  {
                    solarPanelData.Compliance_Labelling_Certifications.Labelling
                      .Specifications.Dimensions
                  }
                </td>
                <td>
                  {
                    solarPanelData.Compliance_Labelling_Certifications.Labelling
                      .Energy_Efficiency_Class
                  }
                </td>
                <td>
                  {
                    solarPanelData.Compliance_Labelling_Certifications.Labelling
                      .Other_Information
                  }
                </td>
                <td>
                  {solarPanelData.Compliance_Labelling_Certifications.Certifications.join(
                    ", "
                  )}
                </td>
                <td>
                  {
                    solarPanelData.Carbon_Footprint
                      .Cradle_to_Grave_Carbon_Footprint
                  }
                </td>
                <td>
                  {solarPanelData.Carbon_Footprint.Calculation_Methodology}
                </td>
                <td>
                  {solarPanelData.Supply_Chain_Due_Diligence.Social_Environmental_Due_Diligence.toString()}
                </td>
                <td>
                  {
                    solarPanelData.Supply_Chain_Due_Diligence
                      .Supply_Chain_Transparency.Origin_of_Materials
                  }
                </td>
                <td>
                  {
                    solarPanelData.Supply_Chain_Due_Diligence
                      .Supply_Chain_Transparency.Production_Processes
                  }
                </td>
                <td>
                  {solarPanelData.Materials_Composition.PV_Panel_Chemistry}
                </td>
                <td>
                  {solarPanelData.Materials_Composition.Critical_Raw_Materials.join(
                    ", "
                  )}
                </td>
                <td>
                  {solarPanelData.Materials_Composition.Hazardous_Substances.Presence.toString()}
                </td>
                <td>
                  {solarPanelData.Materials_Composition.Hazardous_Substances.Substances_List.join(
                    ", "
                  )}
                </td>
                <td>
                  {
                    solarPanelData.Circularity_Resource_Efficiency
                      .End_of_Life_Management.Disposal_Guidelines
                  }
                </td>
                <td>
                  {
                    solarPanelData.Circularity_Resource_Efficiency
                      .End_of_Life_Management.Recycling_Potential
                  }
                </td>
                <td>
                  {
                    solarPanelData.Performance_Durability.Performance_Metrics
                      .Maximum_Power_Output
                  }
                </td>
                <td>
                  {
                    solarPanelData.Performance_Durability.Performance_Metrics
                      .Temperature_Coefficient
                  }
                </td>
                <td>
                  {
                    solarPanelData.Performance_Durability.Durability
                      .Expected_Lifespan
                  }
                </td>
                <td>
                  {solarPanelData.Performance_Durability.Durability.Warranty}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SolarPanelTable;
