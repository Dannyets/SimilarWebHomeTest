import styled from 'styled-components';
import { CenteredColumn } from '../../../common';

export const PlaylistContainer = styled(CenteredColumn)`
    height: 390px;
    width: 640px;
    padding: 10px;
    border: var(--box-border-storke, 1px) solid var(--box-border-color);
`;

export const InputContainer = styled.div`
    width: 100%;
    margin: 0 10px;
`;

export const PlaylistItemsContainer = styled.div`
    overflow-y: scroll;
    width: 100%;
    border: var(--box-border-storke, 1px) solid var(--box-border-color);
`;