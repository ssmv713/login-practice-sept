import {
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { useTemrsForm } from './hooks/use-terms-form';
import { termsModels } from './model/terms.model';

export const TermsForm = () => {
    const {checkLists ,handleAllBoxCheck,handleCheck } = useTemrsForm();
    return(
        <div>
        {/* 전체동의 */}
        <FormControlLabel
          label="전체동의"
          control={
            <Checkbox
              checked={termsModels.length === checkLists.length}
              onChange={(e) => handleAllBoxCheck(e.target.checked)}
            />
          }
        />
        {/* 개별동의 */}
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          {termsModels.map((it, index) => (
            <FormControlLabel
              label={it.term}
              key={index}
              control={
                <Checkbox
                  name="term1"
                  checked={checkLists.includes(index)}
                  onChange={(e) => handleCheck(e.target.checked, index)}
                />
              }
            />
          ))}
        </Box>
      </div>
    )
}