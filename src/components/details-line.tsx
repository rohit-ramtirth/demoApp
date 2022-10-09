import React from 'react';
import styled from '@emotion/native';
import {StyleSheet} from 'react-native';
import {Typography} from './typography';

//
//

export const DetailsLine: React.FC<{
  label?: React.ReactNode;
  children: string;
}> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography
        color="#000000"
        fontSize={14}
        style={style.Typography}
        weight="regular">
        {label}
      </Typography>

      <DetailsLineContent weight={label === 'SKU' ? 'medium' : 'regular'}>
        {children}
      </DetailsLineContent>
    </DetailsLineContainer>
  );
};

//
//

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
  color: '#000000',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};

const style = StyleSheet.create({
  Typography: {
    marginRight: 16,
  },
});
