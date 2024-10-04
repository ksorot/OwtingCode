
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/InstructionsStyles';

const Instructions = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.instructionContainer}>
        <Text style={styles.header}>Instructions</Text>

        <Text style={styles.stepTitle}>1. Prepare for Verification</Text>
        <Text style={styles.stepDetails}>• Ensure you are in a well-lit area.</Text>
        <Text style={styles.stepDetails}>• Remove any accessories that may obscure your face (e.g., hats, sunglasses).</Text>

        <Text style={styles.stepTitle}>2. Position Yourself</Text>
        <Text style={styles.stepDetails}>• Hold your phone at eye level.</Text>
        <Text style={styles.stepDetails}>• Make sure your face is centered in the frame.</Text>

        <Text style={styles.stepTitle}>3. Capture Selfie</Text>
        <Text style={styles.stepDetails}>• Follow the on-screen guide to align your face.</Text>
        <Text style={styles.stepDetails}>• Press the capture button to take a clear and focused selfie.</Text>

        <Text style={styles.stepTitle}>4. Submit for Verification</Text>
        <Text style={styles.stepDetails}>• Review your selfie to ensure it meets the requirements.</Text>
        <Text style={styles.stepDetails}>• Tap the "Submit" button to send your selfie for verification.</Text>

        <Text style={styles.stepTitle}>5. Receive Feedback</Text>
        <Text style={styles.stepDetails}>• Wait a few moments for the verification process to complete.</Text>
        <Text style={styles.stepDetails}>• You will receive immediate feedback on the success of your verification.</Text>
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Instructions;