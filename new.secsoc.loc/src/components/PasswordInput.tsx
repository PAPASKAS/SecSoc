import React from 'react';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";


interface State {
    password: string;
    showPassword: boolean;
}
interface IProps {
    label: string;
    id: string;
    className?: string;
}


const PasswordInput = (props: IProps) => {
    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <FormControl variant="outlined" fullWidth className={props.className}>
            <InputLabel htmlFor="PasswordInput">{props.label}</InputLabel>
            <OutlinedInput
                required
                id={props.id}
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                inputProps={{'minLength':8, 'maxLength': 32}}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    );
};

export default PasswordInput;