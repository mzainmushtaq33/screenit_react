import React from 'react';
import './submit-form.scss';
import { Button, Grid, InputAdornment, MenuItem, TextField, Typography, Box, useTheme, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { IconEye, IconEyeOff, IconDeviceFloppy, IconSearch, IconEdit, IconFileUpload } from '@tabler/icons';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Select } from 'antd';

/**
 * SPECIAL_NOTE
 * don't set btn color empty like btnColor=" " always input valid color name
 * colors	'primary''secondary''error''info''success''warning'
 * don't send any function empty
 * don't set a validation in multiple selection
 */

const SubmitForm = ({
    validationSchema,
    subBtn,
    resetFrom,
    handleSubmit,
    defaultValues,
    formStyle,
    shadow,
    parentGrid,
    inputFields
}) => {
    const theme = useTheme();
    const [viewPass, setViewPass] = useState(true);
    const [fileName, setFileName] = useState('');
    const { btnName, btnDisable, btnCn, btnIcon, btnColor, btnVariant, xs, md, lg, xl } = subBtn;

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // console.log(values);
            handleSubmit(values);
            if (resetFrom === true) {
                resetForm();
            }
        }
    });
    // console.log(formik.handleChange);
    const { Option } = Select;



    return (
        <form className={`${formStyle}`} onSubmit={formik.handleSubmit}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ ...parentGrid }}>
                {inputFields.map((d, i) => (
                    <Grid item key={`${i}-${d.name}`} xs={d.gridSizes.xs} md={d.gridSizes.md} lg={d.gridSizes.lg} xl={d.gridSizes.xl}>
                        {d.type === 'checkbox' ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: d.contentCenter, height: '100%', ...d.sx }}>
                                <Typography sx={{ minWidth: d.minWidth }} htmlFor={`${i}-${d.name}`}>
                                    {d.label}&nbsp;
                                </Typography>
                                <TextField
                                    id={`${i}-${d.name}`}
                                    name={d.name}
                                    size={d.size ? d.size : 'small'}
                                    value={formik.values[d.name]}
                                    onChange={formik.handleChange}
                                    error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
                                    helperText={formik.touched[d.name] && formik.errors[d.name]}
                                    className="formCheckBox"
                                    type={d.type}
                                    sx={{ border: 'none', background: 'none', width: '15px' }}
                                    inputProps={{
                                        checked: formik.values[d.name]
                                    }}
                                />
                            </Box>
                        ) : d.type === 'checkboxGrp' ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: d.contentCenter, justifyContent: d.contentCenter, height: '100%', ...d.sx, background: '', margin: '8px 0' }}>
                                <Box>
                                    <Box sx={{ display: 'flex', alignItems: '', flexDirection: 'column' }}>
                                        <Typography sx={{ borderBottom: 1, width: '50px' }}></Typography>
                                        <Typography variant="title">{d.label} :</Typography>
                                    </Box>
                                    {
                                        d?.groupBox?.map((gd, gi) =>
                                            <FormGroup key={gi} sx={{
                                                background: '',
                                                '&:hover': {
                                                    boxShadow: `0 0 8px ${theme?.palette?.grey.light}`
                                                },
                                                transition: 'all 0.2s ease-in-out',
                                                borderRadius: '8px',
                                                marginTop: '5px',
                                                marginLeft: '20px',
                                                paddingLeft: '8px'
                                            }}>
                                                <FormControlLabel control={
                                                    <Checkbox
                                                        checked={formik.values[gd.name]}
                                                        onChange={formik.handleChange}
                                                        name={gd.name}
                                                        value={formik.values[gd.name]}
                                                        className="formCheckBox"
                                                    />
                                                } label={gd.label} />
                                            </FormGroup>
                                        )
                                    }

                                </Box>
                            </Box>
                        ) : d.type === 'radio' ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', ...d.sx }}>
                                {d.label}&nbsp;
                                <TextField
                                    id={`${i}-${d.name}`}
                                    name={d.name}
                                    size={d.size ? d.size : 'small'}
                                    value={formik.values[d.name]}
                                    onChange={formik.handleChange}
                                    error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
                                    helperText={formik.touched[d.name] && formik.errors[d.name]}
                                    className="formCheckBox"
                                    type={d.type}
                                    sx={{ border: 'none', background: 'none', width: '15px' }}
                                    inputProps={{
                                        checked: formik.values[d.name]
                                    }}
                                />
                            </Box>
                        ) : d.type === 'select' ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', ...d.sx }}>
                                <TextField
                                    disabled={d.disabled === true ? true : false}
                                    className={d.className}
                                    id={`${i}-${d.name}`}
                                    fullWidth
                                    select
                                    size={d.size ? d.size : 'small'}
                                    label={d.label}
                                    name={d.name}
                                    value={formik.values[d.name]}
                                    // onChange={formik.handleChange}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        d?.handleReturnSelData && d?.handleReturnSelData(e);
                                    }}
                                    error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
                                    helperText={formik.touched[d.name] && formik.errors[d.name]}
                                    sx={{ ...d.sx, div: {}, marginTop: '8px' }}
                                // SelectProps={MenuProps}
                                >
                                    {d?.optionValues.map((option, optI) => (
                                        <MenuItem id={`${optI}-${d.name}-${d.value}`} key={optI} value={option[d.selectValue]}>
                                            {option[d.selectLabel]}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        ) : d.type === 'selectM' ? (
                            <Box
                                title={d.disabled === true ? d.toolTipText : ''}
                                disabled={d.disabled === true ? true : false}
                                className={d.className}
                                sx={{ display: 'flex', flexDirection: 'column', height: '100%', ...d.sx }}
                            >
                                <Typography variant="title">{d.label}</Typography>
                                <Select
                                    disabled={d.disabled === true ? true : false}
                                    mode="multiple"
                                    allowClear
                                    className={`submitFormSelect`}
                                    showSearch
                                    id={`${i}-${d.name}`}
                                    placeholder="Please select"
                                    value={formik.values[d.name]}
                                    onChange={(e) => {
                                        formik.handleChange({ type: 'change', target: { value: e, name: d.name } });
                                        d?.handleReturnSelData && d?.handleReturnSelData(e);
                                    }}
                                    name={d.name}
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    {d?.optionValues.map((option, optI) => (
                                        <Option className="testOpt" value={option[d.selectValue]} key={optI}>
                                            {option[d.selectLabel]}
                                        </Option>
                                    ))}
                                </Select>
                            </Box>
                        ) : d.type === 'upFile' ? (
                            <TextField
                                disabled={d.disabled === true ? true : false}
                                className={`inputFileUpload CP ${d.className}`}
                                id={`${i}-${d.name}`}
                                fullWidth
                                type={'file'}
                                label={d.label}
                                name={d.name}
                                //small, normal, medium
                                size={d.size ? d.size : 'small'}
                                rows={d.maxRows ? d.maxRows : 0}
                                multiline={d.maxRows ? true : false}
                                //dense, normal, none
                                margin={d.margin ? d.margin : 'normal'}
                                //outlined, filled, standard
                                variant={d.variant ? d.variant : 'outlined'}
                                // value={formik.values[d.name]}
                                defaultValue={formik.values[d.name]}
                                onChange={(e) => {
                                    formik.setFieldValue(d?.name, e?.currentTarget?.files[0]);
                                    setFileName(e?.currentTarget?.files[0]?.name);
                                }}
                                // onChange={(e) => console.log(e.target.files, e?.target?.files[0]?.type)}
                                // onChange={(e) =>
                                //     formik.handleChange({
                                //         type: 'change',
                                //         target: { value: e?.target?.files[0], type: e?.target?.files[0]?.type, name: d.name }
                                //     })
                                // }
                                // onChange={formik.handleChange}
                                error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
                                helperText={formik.touched[d.name] && formik.errors[d.name]}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ cursor: 'pointer', zIndex: 1, position: 'absolute' }}>
                                            <Button>
                                                <IconFileUpload stroke={1.5} size="2rem" onClick={() => setViewPass(false)} />
                                                Choose file
                                            </Button>
                                            <Typography className="fileNameTypo">{fileName}</Typography>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    ...d.sx,
                                    input: { zIndex: 2 },
                                    textarea: {},
                                    div: {}
                                }}
                            />
                        ) : (
                            <TextField
                                disabled={d.disabled === true ? true : false}
                                className={d.className}
                                id={`${i}-${d.name}`}
                                fullWidth
                                type={d.type === 'password' ? (viewPass ? 'password' : 'text') : d.type ? d.type : 'text'}
                                label={d.label}
                                name={d.name}
                                //small, normal, medium
                                size={d.size ? d.size : 'small'}
                                rows={d.maxRows ? d.maxRows : 0}
                                multiline={d.maxRows ? true : false}
                                //dense, normal, none
                                margin={d.margin ? d.margin : 'normal'}
                                //outlined, filled, standard
                                variant={d.variant ? d.variant : 'outlined'}
                                value={formik.values[d.name]}
                                onChange={formik.handleChange}
                                error={formik.touched[d.name] && Boolean(formik.errors[d.name])}
                                helperText={formik.touched[d.name] && formik.errors[d.name]}
                                InputProps={
                                    d.type === 'password'
                                        ? {
                                            endAdornment: (
                                                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                                                    {viewPass ? (
                                                        <Button sx={{ minWidth: '10px', borderRadius: '100%', height: '40px' }}>
                                                            <IconEye stroke={1.5} size="1.3rem" onClick={() => setViewPass(false)} />
                                                        </Button>
                                                    ) : (
                                                        <Button sx={{ minWidth: '10px', borderRadius: '100%', height: '40px' }}>
                                                            <IconEyeOff stroke={1.5} size="1.3rem" onClick={() => setViewPass(true)} />
                                                        </Button>
                                                    )}
                                                </InputAdornment>
                                            )
                                        }
                                        : d.inputEndIcon
                                }
                                sx={{
                                    ...d.sx,
                                    input: {},
                                    textarea: {},
                                    div: {}
                                }}
                            />
                        )}
                    </Grid>
                ))}
                <Grid item xs={xs} md={md} lg={lg} xl={xl} className={`${btnCn}`}>
                    <Button
                        disabled={btnDisable ? true : false}
                        type="submit"
                        fullWidth
                        className={`fromSubmitBtn ${btnCn}`}
                        // onClick={() => handleSubmitBtn(fromData, upDateFromData)}
                        variant={btnVariant ? btnVariant : 'contained'}
                        color={btnColor ? btnColor : 'primary'}
                        sx={{ boxShadow: shadow, marginTop: '1rem', display: 'flex', alignItems: 'center', padding: '7px 0', textTransform: 'capitalize' }}
                    >
                        {btnIcon === 'save' ? (
                            <IconDeviceFloppy />
                        ) : btnIcon === 'search' ? (
                            <IconSearch />
                        ) : btnIcon === 'update' ? (
                            <IconEdit />
                        ) : btnIcon === 'upload' ? (
                            <IconFileUpload />
                        ) : (
                            ''
                        )}
                        {btnName ? btnName : 'Submit'}
                    </Button>
                </Grid>
            </Grid>
        </form >
    );
};

export default SubmitForm;
