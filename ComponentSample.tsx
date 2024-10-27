import * as React from 'react';
import {StyleSheet} from 'react-native';

/*******************************************************************************
 *                                  CONSTANTS                                  *
 *******************************************************************************/

const SAMPLE_COMPONENT_CONSTANT = 1;

/*******************************************************************************
 *                                    TYPES                                    *
 *******************************************************************************/

type SampleCOmponentItemType = 'type1' | 'type2';

/*******************************************************************************
 *                                    UTILS                                    *
 *******************************************************************************/

function doSomething() {
  return SAMPLE_COMPONENT_CONSTANT;
}

/*******************************************************************************
 *                                     HOOK                                    *
 *******************************************************************************/

function useSampleComponent() {
  const value = 1;

  use;
  return {value};
}

/*******************************************************************************
 *                                  COMPONENT                                  *
 *******************************************************************************/

const SampleComponent = () => {
  const {value} = useSampleComponent();

  return (
    <View style={styles.wrapper}>
      <Text>{value}</Text>
    </View>
  );
};

/*******************************************************************************
 *                                    STYLES                                   *
 *******************************************************************************/

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
});

/*******************************************************************************
 *                                    EXPORT                                   *
 *******************************************************************************/

export default SampleComponent;
// export default React.memo(SampleComponent);
