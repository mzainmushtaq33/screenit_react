import { Grid } from "@mui/material";
import React from "react";
import "./add-screen.scss";
import MainCard from "../../component/ui-components/cards/main-card";
import InputComponent from "../../component/ui-components/formComponents/input";
import LabelComponent from "../../component/ui-components/formComponents/label";
// image import
import img_1 from "./images/Screenshot_1.png";
import img_3 from "./images/Screenshot_3.png";
import { useNavigate } from "react-router-dom";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import SelectComponent from "../../component/ui-components/formComponents/select";
import { cross_v1 } from "../../services/svg/svg-icon";

const AddScreen = () => {
  const navigate = useNavigate();

  const changeCheckBox = e => {
    console.log(e);
  }
  const screenHandler = e => {
    navigate(-1)
  }
  return (
    <MainCard
      sx={{ boxShadow: 0, border: 0, borderRadius: "20px", padding: "20px" }}
    >
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={6} lg={6} xl={3} className="screenCrdWrp mainFS18">
          <div className='cmnBox checkBoxArea'>
            <div className="checkBoxWrp">
              <b>Choose Orientation</b>
              <div className="checkBoxParent">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Landscape</p>
                          <input type="checkbox" checked onChange={changeCheckBox} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>Portrait</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="checkBoxWrp">
              <b>Choose Media Type</b>
              <div className="checkBoxParent">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Image</p>
                          <input type="checkbox" checked onChange={changeCheckBox} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>Video</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Audio</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>Document</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="checkBoxWrp">
              <b>Choose Your Template</b>
              <div className="checkBoxParent">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Own Design</p>
                          <input type="checkbox" checked onChange={changeCheckBox} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>Template</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="dragDropSec">
                <span>Drop your files here</span>
              </div>
            </div>
            <div className="checkBoxWrp">
              <b>Choose Widget</b>
              <div className="checkBoxParent">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Yes</p>
                          <input type="checkbox" checked onChange={changeCheckBox} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>No</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="checkBoxWrp">
              <b>Choose Schedule</b>
              <div className="checkBoxParent">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label className="chkContainer">
                          <p>Yes</p>
                          <input type="checkbox" checked onChange={changeCheckBox} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <label className="chkContainer">
                          <p>No</p>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={3} className="screenCrdWrp">
          <div className='cmnBox'>
            <InputComponent
              label={"Screen Name"}
              required
              placeholder={"Section-1"}
            />
            <br /><br />
            <InputComponent
              label={"Screen ID"}
              placeholder={"324324325"}
            />
            <br /><br />
            <SelectComponent
              label={"Location"}
              placeholder={"Dhaka, Bangladesh"}
            />
            <br />
            <SelectComponent
              label={"Screen Status"}
              placeholder={"Active"}
            />
            <br />
            <div>
              <LabelComponent label={"Widget"} />
              <Grid className="widgetImgParent" item>
                <div className="widgetImg">
                  <img src={img_1} alt="" />
                </div>
                <div className="widgetImg">
                  <img src={img_1} alt="" />
                </div>
              </Grid>
            </div>
            <br /><br />
            <InputComponent
              label={"Schedule"}
              suffix={<span className="inputCross">{cross_v1}</span>}
              placeholder={"Schedule 1 07 OCT 2022 - 12:20"}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={6} className="screenCrdWrp">
          <div className='cmnBox mainFS18'>
            <b>Preview</b>
            <div className="previewImg">
              <img src={img_3} width="100%" alt="" />
              <div className="btnGrp">
                <MainButton variant="outlinedDark" btnText="Cancel" clickHandler={screenHandler} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <MainButton variant="" btnText="Save" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default AddScreen;
