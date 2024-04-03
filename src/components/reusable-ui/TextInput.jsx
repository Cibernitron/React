import styled from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({ value, onChange, Icon, ...restProps }) {

    
    return (
        <InputStyled>
            {Icon && Icon}
            <input value={value} onChange={onChange} type="text" {...restProps}/>
        </InputStyled>
    );
}

const InputStyled = styled.div`
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${theme.borderRadius.round};
        margin: 18px 0;
        padding: 18px 24px;
        white-space: nowrap;
        width: 100%;

    .icon {
        color: ${theme.colors.greySemiDark};
        margin: 0 8px;
        font-size: ${theme.fonts.size.P0};
        min-width: 1em;
    }
    
    input {
        border: none;
        font-size: ${theme.fonts.size.P0};
        width: 100%;
        display: flex;
        color: ${theme.colors.dark};
        &::placeholder {
            background-color: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
    }

`;