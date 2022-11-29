import React from "react";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import MainModal from "../../component/ui-components/main-modals/main-modal";

import * as validation from "../../component/ui-components/submit-forms/defaultValidation";
import SubmitForm from "../../component/ui-components/submit-forms/submit-form";

import DataTable from '../../component/ui-components/main-table/main-table';
import { fakeDataScreen } from './fakeData';
import CreatePlaylistModal from "./createPlaylistModal";


function Test() {
    const [open, setOpen] = React.useState(false);
    const createHandler = (e) => {
        setOpen(true);
    };

    // from submit
    const defGetByName = {
        name: "",
        password: "",
        isNewScreenAllowed: false,
        isUpdateScreenAllowed: false,
        isDeleteScreenAllowed: false,
        isLibraryAllowed: false,
        isUploadLibraryAllowed: false,
        isDeleteLibraryAllowed: false,
        isNewPlaylistAllowed: false,
        isEditPlaylistAllowed: false,
        isNewScheduleAllowed: false,
        isEditScheduleAllowed: false,
        isNewTemplateAllowed: false,
        isReportsAllowed: false,
    };
    const handleSubmit = (e) => {
        console.log(e);
    };
    const headers = [
        { title: "S.No", dataIndex: "userId" },
        { title: "Item Name", dataIndex: "playerName" },
        { title: "Media Type", dataIndex: "contentType" },
    ];

    return (
        <div className="App">

            <h1>ABU HASAN</h1>
            <p>ABU HASAN</p>
            <span>ABU HASAN</span>
            <h3>ABU HASAN</h3>
            <div className='checkParent'>
                <label className="chkContainer">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <br /><br />
            <h1>for button</h1>
            <MainButton clickHandler={createHandler} wdt="100%" icon="plus" btnText="Add User Default" variant="" />
            <MainButton disabled clickHandler={createHandler} wdt="auto" icon="plus" btnText="Add User Black" variant="outlinedDark" />
            <MainButton clickHandler={createHandler} wdt="250px" icon="plus" btnText="Add User Border" variant="outlinedBtn" />
            <br /><br />
            <h1>for submit from</h1>
            <SubmitForm
                validationSchema={validation.user_add}
                subBtn={{
                    btnName: 'Submit',
                    btnIcon: '',
                    btnColor: 'primary',
                    btnVariant: '',
                    xs: 12,
                    md: 10,
                    lg: 10,
                    xl: 10
                }}
                resetFrom={false}
                handleSubmit={handleSubmit}
                defaultValues={defGetByName}
                formStyle=""
                shadow="0"
                parentGrid={{ justifyContent: 'center', alignItems: '', flexDirection: '' }}
                // marginTop={mt3}
                inputFields={[
                    {
                        type: 'text',
                        label: 'User Name',
                        name: 'name',
                        size: '',
                        margin: '',
                        variant: '',
                        inputDefault: defGetByName.name,
                        inputEndIcon: {},
                        sx: { color: '' },
                        gridSizes: { xs: 12, md: 5, lg: 5, xl: 5 }
                    },
                    {
                        type: 'password',
                        label: 'Password',
                        name: 'password',
                        size: '',
                        margin: '',
                        variant: '',
                        inputDefault: defGetByName.password,
                        inputEndIcon: {},
                        sx: { color: '' },
                        gridSizes: { xs: 12, md: 5, lg: 5, xl: 5 }
                    }
                ]}
            />

            <MainModal
                clickHandler={createHandler}
                open={open}
                setOpen={setOpen}
                titleText="Create Playlist"
            >
                <h1>Test</h1>
            </MainModal>

            <DataTable rowKey="_id" columns={headers} dataSource={fakeDataScreen} pagination />

            <br />
            <CreatePlaylistModal />
        </div>
    );
}

export default Test;
